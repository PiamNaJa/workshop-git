import { dataProducts } from '@containers/bill/constants'
import { Product } from '@containers/bill/interface'
import {
  StyledEmptyBox,
  StyledHeader,
  StyledLayout,
  StyledSubHeader,
  StyledSubHeaderDetail,
  StyledWrapper,
  TitleNoMargin
} from '@containers/bill/style'
import { Text } from '@style/index'
import { Col, Row, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ReactElement } from 'react'

const BillContainer = (): ReactElement => {
  const columns: ColumnsType<Product> = [
    {
      title: 'จำนวน',
      dataIndex: 'quantity',
      key: 'name'
    },
    {
      title: 'รายการ',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'หน่วยละ',
      dataIndex: 'price',
      key: 'name'
    },
    {
      title: 'จำนวนเงิน',
      key: 'name',render:(data)=> {
        return <Text>{data.price * data.quantity}</Text>
      }
    }
  ]

  return (
    <StyledLayout>
      <StyledWrapper>
        {/* Header */}
        <StyledHeader>
          <Row gutter={[8, 8]}>
            <Col span={7}>
              <TitleNoMargin level={5}>เล่มที่</TitleNoMargin>
              <TitleNoMargin level={5}>Book no. ___________</TitleNoMargin>
            </Col>
            <StyledEmptyBox flex={1} />
            <Col span={7}>
              <TitleNoMargin level={5}>เลขที่</TitleNoMargin>
              <TitleNoMargin level={5}>Bill no. ___________</TitleNoMargin>
            </Col>
          </Row>
        </StyledHeader>
        <StyledSubHeader>
          <TitleNoMargin level={4}>บิลเงินสด</TitleNoMargin>
        </StyledSubHeader>
        <StyledSubHeaderDetail>
          <Row>
            <Col span={16}>
              <TitleNoMargin level={5}>นาม</TitleNoMargin>
              <TitleNoMargin level={5}>Name ________________________________________</TitleNoMargin>
            </Col>
            <Col span={8}>
              <TitleNoMargin level={5}>วันที่</TitleNoMargin>
              <TitleNoMargin level={5}>Date _________________</TitleNoMargin>
            </Col>
            <Col span={16}>
              <TitleNoMargin level={5}>ที่อยู่</TitleNoMargin>
              <TitleNoMargin level={5}>Address ______________________________________</TitleNoMargin>
            </Col>
            <Col span={8}>
              <TitleNoMargin level={5}>เลขผู้เสียภาษี</TitleNoMargin>
              <TitleNoMargin level={5}>TaxId _________________</TitleNoMargin>
            </Col>
          </Row>
        </StyledSubHeaderDetail>
        {/* Content */}
        <Table columns={columns} dataSource={dataProducts} pagination={false} />
      </StyledWrapper>
    </StyledLayout>
  )
}
export default BillContainer
