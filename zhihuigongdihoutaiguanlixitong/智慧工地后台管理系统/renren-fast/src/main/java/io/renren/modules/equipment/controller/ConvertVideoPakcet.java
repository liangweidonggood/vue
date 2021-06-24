package io.renren.modules.equipment.controller;

import io.renren.modules.equipment.entity.EquipmentEntity;
import io.renren.modules.equipment.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Objects;

import static io.renren.modules.equipment.controller.EquipmentController.rtspMap;

@Component
public class ConvertVideoPakcet  {
    public Process process;
    @Value("${rtsp.ffmpegPath}")
    String ffmpegPath;
@Autowired
    EquipmentService equipmentService;

    public Integer pushVideoAsRTSP(Integer eqId,String id, String fileName){
        int flag = -1;
        EquipmentEntity equipmentEntity=new EquipmentEntity();
        equipmentEntity.setId(eqId);
        EquipmentEntity oldRecord = equipmentService.getById(eqId);

        // ffmpeg位置，最好写在配置文件中
//        String ffmpegPath = "E:\\webset\\ffmpeg\\ffmpeg-20200213-6d37ca8-win64-static\\bin\\";
        try {
            // 视频切换时，先销毁进程，全局变量Process process，方便进程销毁重启，即切换推流视频
            if(process != null){
                process.destroy();
                System.out.println(">>>>>>>>>>推流视频切换<<<<<<<<<<");
            }
            // cmd命令拼接，注意命令中存在空格
            //-i "rtsp://:8554/test" -c copy -f hls -hls_time 2.0 -hls_list_size 1 -hls_wrap 15 D:/nginx-1.16.1/html/hls/test.m3u8
            String command = ffmpegPath; // ffmpeg位置
            command += "ffmpeg "; // ffmpeg开头，-re代表按照帧率发送，在推流时必须有
            command += " -i \"" + id + "\""; // 指定要推送的视频
            command += " -c copy -f hls -hls_time 5.0 -hls_list_size 2 -hls_wrap 10  " + fileName; // 指定推送服务器，-f：指定格式
            System.out.println("ffmpeg推流命令：" +eqId+":"+ command);

            // 运行cmd命令，获取其进程
            process = Runtime.getRuntime().exec(command);
            // 输出ffmpeg推流日志
            BufferedReader br= new BufferedReader(new InputStreamReader(process.getErrorStream()));
            String line = "";
            while ((line = br.readLine()) != null) {
                System.out.println("视频推流信息[" +eqId+":"+ line + "]");
                if(line.contains(".ts' for writing")){
                    if(!Objects.equals("拉流成功",oldRecord.getStatus())){
                    equipmentEntity.setStatus("拉流成功");
                    equipmentService.updateById(equipmentEntity);
                    }
                }
            }
            flag = process.waitFor();
            System.out.println("process exit:"+eqId);
            equipmentEntity.setStatus("拉流中断");
            equipmentService.updateById(equipmentEntity);
        }catch (Exception e){
            e.printStackTrace();
        }
        return flag;
    }



}
