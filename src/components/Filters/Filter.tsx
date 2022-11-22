// @ts-nocheck
import { FC } from "react"
import styled from 'styled-components'

import { DatePicker, Button, Checkbox, Form, Input } from 'antd';

const { RangePicker } = DatePicker;


const FiltersWrapper = styled.div`
  width: 350px;
  padding: 15px;
`

const Filters: FC = (props) => {
  const { onSubmitCallback, startDate, endDate } = props

  const onFinish = (values: any) => {
    if (onSubmitCallback) {
      onSubmitCallback({
        startDate: values['launchPeriod'][0],
        endDate: values['launchPeriod'][1],
      })
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo)
  }

  return (
    <FiltersWrapper>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Launch Period"
          name="launchPeriod"
        >
          <RangePicker />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Filter
          </Button>
        </Form.Item>
      </Form>
    </FiltersWrapper>
  )
}

export default Filters