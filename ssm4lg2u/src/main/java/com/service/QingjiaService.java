package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.QingjiaEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.QingjiaVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.QingjiaView;


/**
 * 请假
 *
 * @author 
 * @email 
 * @date 2021-01-19 18:19:25
 */
public interface QingjiaService extends IService<QingjiaEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<QingjiaVO> selectListVO(Wrapper<QingjiaEntity> wrapper);
   	
   	QingjiaVO selectVO(@Param("ew") Wrapper<QingjiaEntity> wrapper);
   	
   	List<QingjiaView> selectListView(Wrapper<QingjiaEntity> wrapper);
   	
   	QingjiaView selectView(@Param("ew") Wrapper<QingjiaEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<QingjiaEntity> wrapper);
   	
}

