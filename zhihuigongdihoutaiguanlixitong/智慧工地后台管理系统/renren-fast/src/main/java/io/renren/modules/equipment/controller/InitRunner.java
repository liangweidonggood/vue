package io.renren.modules.equipment.controller;

import io.renren.modules.equipment.entity.EquipmentEntity;
import io.renren.modules.equipment.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;

import static io.renren.modules.equipment.controller.EquipmentController.rtspMap;

@Component
public class InitRunner implements ApplicationRunner {
    @Autowired
    private EquipmentService equipmentService;
    @Value("${rtsp.hlsPath}")
    String hlsPath;
    @Autowired
    ConvertVideoPakcet convertVideoPakcet;
    @Override
    public void run(ApplicationArguments args) throws Exception {
        List<?> list = equipmentService.list();
        for (Object one : list) {
            EquipmentEntity equipment=(EquipmentEntity)one;
            ConvertVideoPakcet oldConvertVideoPakcet = rtspMap.get(equipment.getId());
            if (oldConvertVideoPakcet != null) {
                Thread thread = new Thread(() -> {
                    oldConvertVideoPakcet.pushVideoAsRTSP(equipment.getId(),equipment.getUrl(), hlsPath + equipment.getId() + ".m3u8");
                });
                thread.start();
            } else {
                Thread thread = new Thread(() -> {
                    this.convertVideoPakcet.pushVideoAsRTSP(equipment.getId(),equipment.getUrl(), hlsPath + equipment.getId() + ".m3u8");
                });
                thread.start();
                rtspMap.put(equipment.getId(), convertVideoPakcet);

            }
        }
    }
}
