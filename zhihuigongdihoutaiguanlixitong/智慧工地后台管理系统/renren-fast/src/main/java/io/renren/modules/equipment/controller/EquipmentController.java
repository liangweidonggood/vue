package io.renren.modules.equipment.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import com.google.common.collect.Maps;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.renren.modules.equipment.entity.EquipmentEntity;
import io.renren.modules.equipment.service.EquipmentService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;


/**
 * 设备
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2020-05-30 20:24:22
 */
@RestController
@RequestMapping("equipment/equipment")
public class EquipmentController {
    @Autowired
    private EquipmentService equipmentService;
    @Autowired
    ConvertVideoPakcet convertVideoPakcet;

    @Value("${rtsp.hlsPath}")
    String hlsPath;
    public static Map<Integer, ConvertVideoPakcet> rtspMap = Maps.newConcurrentMap();

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("equipment:equipment:list")
    public R list(@RequestParam Map<String, Object> params) {
        PageUtils page = equipmentService.queryPage(params);
        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("equipment:equipment:info")
    public R info(@PathVariable("id") Integer id) {
        EquipmentEntity equipment = equipmentService.getById(id);

        return R.ok().put("equipment", equipment);
    }

    @RequestMapping("/view/{id}")
    @RequiresPermissions("equipment:equipment:info")
    public R view(@PathVariable("id") Integer id) {
        EquipmentEntity equipment = equipmentService.getById(id);
        if (equipment != null) {
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

        return R.ok().put("equipment", equipment);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("equipment:equipment:save")
    public R save(@RequestBody EquipmentEntity equipment) {
        equipment.setStatus("拉流中");
        equipmentService.save(equipment);
        if (equipment != null) {
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
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("equipment:equipment:update")
    public R update(@RequestBody EquipmentEntity equipment) {
        equipment.setStatus("拉流中");
        equipmentService.updateById(equipment);
        if (equipment != null) {
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
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("equipment:equipment:delete")
    public R delete(@RequestBody Integer[] ids) {
        equipmentService.removeByIds(Arrays.asList(ids));

        return R.ok();
    }

}
