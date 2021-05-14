/**
 * UniversesView pulls universe data from data context and displays them in a table
 * */

// libs
import React, { FC, useContext } from 'react'
// contexts and types
import { DataContext } from 'contexts/data/DataContext'
// styles
import styles from './UniversesView.styles'
import { createUseStyles } from 'react-jss'
import { Table, Typography } from 'antd'

const useStyles = createUseStyles(styles)

const UniversesView: FC = () => {
  const classes = useStyles()
  const { Text } = Typography

  const {
    dataState: { universes },
  } = useContext(DataContext)

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Max Size',
      dataIndex: 'maxSize',
      key: 'maxSize',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  ]

  return (
    <div className={classes.universesViewContainer}>
      <Text className={classes.title}>Universes</Text>
      <Table columns={columns} dataSource={universes} pagination={false} />
    </div>
  )
}

export default UniversesView
