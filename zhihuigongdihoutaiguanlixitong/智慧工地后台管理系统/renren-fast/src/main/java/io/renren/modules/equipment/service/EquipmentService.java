package io.renren.modules.equipment.service;

import com.baomidou.mybatisplus.extension.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.equipment.entity.EquipmentEntity;

import java.util.Map;

/**
 * 设备
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2020-05-30 20:24:22
 */
public interface EquipmentService extends IService<EquipmentEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

