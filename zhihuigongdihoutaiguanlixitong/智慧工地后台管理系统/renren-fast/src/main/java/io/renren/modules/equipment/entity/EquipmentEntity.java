package io.renren.modules.equipment.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 设备
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2020-05-30 20:24:22
 */
@Data
@TableName("equipment")
public class EquipmentEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@TableId
	private Integer id;
	/**
	 * rtsp地址
	 */
	private String url;
	/**
	 * 名称
	 */
	private String name;

	/**
	 * 名称
	 */
	private String status;

}
