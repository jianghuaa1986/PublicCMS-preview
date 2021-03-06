package com.publiccms.views.directive.sys;

// Generated 2015-5-10 17:54:56 by com.sanluan.common.source.SourceGenerator

import java.io.IOException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.publiccms.common.base.AbstractTemplateDirective;
import com.publiccms.logic.component.config.ConfigComponent;
import com.publiccms.logic.component.config.ConfigComponent.ConfigInfo;
import com.sanluan.common.handler.RenderHandler;

@Component
public class SysConfigListDirective extends AbstractTemplateDirective {

    @Override
    public void execute(RenderHandler handler) throws IOException, Exception {
        Collection<ConfigInfo> list = configComponent.getConfigList(getSite(handler), handler.getLocale());
        handler.put("list", list).render();
    }

    @Override
    public boolean needAppToken() {
        return true;
    }

    @Autowired
    private ConfigComponent configComponent;
}