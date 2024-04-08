import { Card, Col, Row, Statistic } from 'antd';
import { CardProps } from './type';
import { CardBoxWrapper } from './style';

const CardBox = ({title,value,icon}: CardProps) => (
      <CardBoxWrapper>
        <Card bordered={false}>
        <Statistic
          title={title}
          value={value}
          prefix={icon}
        />
      </Card>
      </CardBoxWrapper>
);

export default CardBox;