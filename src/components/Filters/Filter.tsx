// @ts-nocheck
import { FC } from "react"
import styled from 'styled-components'

import { DatePicker, Button, Checkbox, Form, Input, Card } from 'antd';

const { RangePicker } = DatePicker;


const FiltersWrapper = styled.div`
  width: 350px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const SelectedLaunchWrapper = styled.div``

const Item = styled.div``

const Label = styled.div``

const Value = styled.div``

const ClearSelectionLink = styled.span`
  color:  #f76464;
`

const Filters: FC = (props) => {
  const { onSubmitCallback, selectedLaunch } = props

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

  const cardTitle = selectedLaunch ? selectedLaunch.title : 'Select a launch in the map'

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
    
      <SelectedLaunchWrapper>
        <Card title={cardTitle} style={{ height: 300 }}>
          {selectedLaunch && (<><Item>
            <Label>Window for launch: </Label>
            <Value>{selectedLaunch.launchStartDate} - {selectedLaunch.launchEndDate}</Value>
          </Item>

            <Item>
              <Label>Pad used: </Label>
              <Value>{selectedLaunch.padName}</Value>
            </Item></>)}
        </Card>
      </SelectedLaunchWrapper>
    </FiltersWrapper>
  )
}


// name, 
// time of launch, 
// name of the launch pad and 
// the agencies that are collaborating on the launch.

export default Filters