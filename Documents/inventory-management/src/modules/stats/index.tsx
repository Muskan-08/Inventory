import React, { useEffect } from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import { getStatsColumn } from './config';
import CardBox from '../../components/card';
import { StatsWrapper } from './style';
import { useSelector } from 'react-redux';

const Stats: React.FC = () => {
    const state = useSelector((state: any) => state.inventory);
    const { listData } = state;
    const stats = getStatsColumn(state)
    useEffect(() => {},[listData])
  return(<StatsWrapper>
    <h2>Inventory Stats</h2>
    <Row gutter={16}>
      {stats.map((record : any,index: number) => 
      <Col span={6}>
      <CardBox title={record?.title} value={record?.value} icon={record?.icon} />
          </Col>)}
  </Row>
  </StatsWrapper>)
};

export default Stats;