package com.entity.view;

import com.entity.KaoqindakaEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 考勤打卡
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-01-19 18:19:25
 */
@TableName("kaoqindaka")
public class KaoqindakaView  extends KaoqindakaEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public KaoqindakaView(){
	}
 
 	public KaoqindakaView(KaoqindakaEntity kaoqindakaEntity){
 	try {
			BeanUtils.copyProperties(this, kaoqindakaEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
