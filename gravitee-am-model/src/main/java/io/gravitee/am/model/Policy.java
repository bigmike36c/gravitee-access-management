/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.am.model;

import io.gravitee.am.common.policy.ExtensionPoint;
import io.swagger.annotations.ApiModelProperty;

import java.util.Date;

/**
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
public class Policy {

    private String id;

    private boolean enabled;

    private String name;

    private String type;

    private ExtensionPoint extensionPoint;

    private int order;

    private String configuration;

    private String domain;

    private String client;

    @ApiModelProperty(dataType = "java.lang.Long")
    private Date createdAt;

    @ApiModelProperty(dataType = "java.lang.Long")
    private Date updatedAt;

    public Policy() { }

    public Policy(Policy other) {
        this.id = other.id;
        this.enabled = other.enabled;
        this.name = other.name;
        this.type = other.type;
        this.extensionPoint = other.extensionPoint;
        this.order = other.order;
        this.configuration = other.configuration;
        this.domain = other.domain;
        this.client = other.client;
        this.createdAt = other.createdAt;
        this.updatedAt = other.updatedAt;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public ExtensionPoint getExtensionPoint() {
        return extensionPoint;
    }

    public void setExtensionPoint(ExtensionPoint extensionPoint) {
        this.extensionPoint = extensionPoint;
    }

    public int getOrder() {
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }

    public String getConfiguration() {
        return configuration;
    }

    public void setConfiguration(String configuration) {
        this.configuration = configuration;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
