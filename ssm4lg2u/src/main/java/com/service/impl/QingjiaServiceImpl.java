package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.QingjiaDao;
import com.entity.QingjiaEntity;
import com.service.QingjiaService;
import com.entity.vo.QingjiaVO;
import com.entity.view.QingjiaView;

@Service("qingjiaService")
public class QingjiaServiceImpl extends ServiceImpl<QingjiaDao, QingjiaEntity> implements QingjiaService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<QingjiaEntity> page = this.selectPage(
                new Query<QingjiaEntity>(params).getPage(),
                new EntityWrapper<QingjiaEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<QingjiaEntity> wrapper) {
		  Page<QingjiaView> page =new Query<QingjiaView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<QingjiaVO> selectListVO(Wrapper<QingjiaEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public QingjiaVO selectVO(Wrapper<QingjiaEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<QingjiaView> selectListView(Wrapper<QingjiaEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public QingjiaView selectView(Wrapper<QingjiaEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
