package com.dao;

import com.entity.XuexiaogonggaoEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.XuexiaogonggaoVO;
import com.entity.view.XuexiaogonggaoView;


/**
 * 学校公告
 * 
 * @author 
 * @email 
 * @date 2021-01-19 18:19:25
 */
public interface XuexiaogonggaoDao extends BaseMapper<XuexiaogonggaoEntity> {
	
	List<XuexiaogonggaoVO> selectListVO(@Param("ew") Wrapper<XuexiaogonggaoEntity> wrapper);
	
	XuexiaogonggaoVO selectVO(@Param("ew") Wrapper<XuexiaogonggaoEntity> wrapper);
	
	List<XuexiaogonggaoView> selectListView(@Param("ew") Wrapper<XuexiaogonggaoEntity> wrapper);

	List<XuexiaogonggaoView> selectListView(Pagination page,@Param("ew") Wrapper<XuexiaogonggaoEntity> wrapper);
	
	XuexiaogonggaoView selectView(@Param("ew") Wrapper<XuexiaogonggaoEntity> wrapper);
	
}
