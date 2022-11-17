package com.example.demo.table.mapper;

import com.example.demo.order.entity.Order;
import com.example.demo.order.entity.OrderMenu;
import com.example.demo.table.dto.TableDto;
import com.example.demo.table.entity.Table;
import com.example.demo.user.entity.User;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface TableMapper {

    default List<Table> tablePostDtoToTableList(TableDto.postList requestBody) {

        List<Table> tableList = new ArrayList<>();

        for(int i = 0; i < requestBody.getTableList().size(); i++) {
            User user = new User();
            Table table = new Table();

            user.setUserId(requestBody.getUserId());
            table.setTableNumber(requestBody.getTableList().get(i).getTableNumber());
            table.setQrUrl(requestBody.getTableList().get(i).getQrUrl());
            table.setCreatedAt(requestBody.getTableList().get(i).getCreatedAt());
            table.setUser(user);

            tableList.add(table);
        }
        return tableList;
    }

    default List<TableDto.getResponse> tablesToTableGetResponseDto(List<Table> tableList) {
        List<TableDto.getResponse> getResponseList = new ArrayList<>();
        for(int i = 0; i < tableList.size(); i++) {
            TableDto.getResponse response = new TableDto.getResponse();
            response.setTableId(tableList.get(i).getTableId());
            response.setTableNumber(tableList.get(i).getTableNumber());
            response.setOrderList(ordersToOrderResponseDto(tableList.get(i).getOrderList()));
            getResponseList.add(response);
        }
        return getResponseList;
    }

    default List<TableDto.getOrderResponse> ordersToOrderResponseDto(List<Order> orderList) {
        List<TableDto.getOrderResponse> getOrderResponseList = new ArrayList<>();
        for(int i = 0; i < orderList.size(); i++) {
            TableDto.getOrderResponse response = new TableDto.getOrderResponse();
            response.setOrderMenuList(orderMenusToOrderMenuResponseDto(orderList.get(i).getOrderMenuList()));
            response.setMessage(orderList.get(i).getMessage());
            getOrderResponseList.add(response);

        }
        return getOrderResponseList;
    }

    default List<TableDto.getOrderMenuResponse> orderMenusToOrderMenuResponseDto(List<OrderMenu> orderMenuList) {
        List<TableDto.getOrderMenuResponse> getOrderMenuResponseList = new ArrayList<>();
        for(int i = 0; i < orderMenuList.size(); i++) {
            TableDto.getOrderMenuResponse response = new TableDto.getOrderMenuResponse();
            response.setMenuId(orderMenuList.get(i).getMenu().getMenuId());
            response.setMenuName(orderMenuList.get(i).getMenu().getMenuName());
            response.setPrice(orderMenuList.get(i).getMenu().getPrice());
            response.setQuantity(orderMenuList.get(i).getQuantity());
            getOrderMenuResponseList.add(response);
        }
        return getOrderMenuResponseList;
    }

    default List<TableDto.getQrResponse> tablesToGetQrResponseDto(List<Table> tableList) {
        List<TableDto.getQrResponse> getQrResponseList = new ArrayList<>();

        for(int i = 0; i < tableList.size(); i++) {
            TableDto.getQrResponse response = new TableDto.getQrResponse();
            response.setTableId(tableList.get(i).getTableId());
            response.setTableNumber(tableList.get(i).getTableNumber());
            response.setQrUrl(tableList.get(i).getQrUrl());
            response.setCreatedAt(tableList.get(i).getCreatedAt());
            getQrResponseList.add(response);
        }

        return getQrResponseList;
    }

    default TableDto.getQrResponse tableToGetQrResponseDto(Table table) {
        TableDto.getQrResponse response = new TableDto.getQrResponse();

        response.setTableId(table.getTableId());
        response.setTableNumber(table.getTableNumber());
        response.setQrUrl(table.getQrUrl());
        response.setCreatedAt(table.getCreatedAt());

        return response;
    }
}