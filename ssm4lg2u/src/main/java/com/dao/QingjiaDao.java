package com.dao;

import com.entity.QingjiaEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.QingjiaVO;
import com.entity.view.QingjiaView;


/**
 * 请假
 * 
 * @author 
 * @email 
 * @date 2021-01-19 18:19:25
 */
public interface QingjiaDao extends BaseMapper<QingjiaEntity> {
	
	List<QingjiaVO> selectListVO(@Param("ew") Wrapper<QingjiaEntity> wrapper);
	
	QingjiaVO selectVO(@Param("ew") Wrapper<QingjiaEntity> wrapper);
	
	List<QingjiaView> selectListView(@Param("ew") Wrapper<QingjiaEntity> wrapper);

	List<QingjiaView> selectListView(Pagination page,@Param("ew") Wrapper<QingjiaEntity> wrapper);
	
	QingjiaView selectView(@Param("ew") Wrapper<QingjiaEntity> wrapper);
	
}
