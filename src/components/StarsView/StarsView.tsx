/**
 * StarsView pulls star data from data context and displays them in a table
 * */

// libs
import React, { FC, useContext } from 'react'
// contexts and types
import { DataContext } from 'contexts/data/DataContext'
// styles
import styles from './StarsView.styles'
import { createUseStyles } from 'react-jss'
import { Table, Typography } from 'antd'

const useStyles = createUseStyles(styles)

const StarsView: FC = () => {
  const classes = useStyles()
  const { Text } = Typography

  const {
    dataState: { stars },
  } = useContext(DataContext)

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Universe Id',
      dataIndex: 'universeId',
      key: 'universeId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
  ]

  return (
    <div className={classes.starsViewContainer}>
      <Text className={classes.title}>Stars</Text>
      <Table columns={columns} dataSource={stars} pagination={false} />
    </div>
  )
}

export default StarsView
