import * as React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { ModalAppState } from '../../../../core/interfaces'

import * as styles from './Blurred.css'

type StateProps = {
  isAddModalActive: boolean
  isEditModalActive: boolean
  isDeleteModalActive: boolean
}

const BlurredFilter: React.FC<StateProps> = ({
  isAddModalActive,
  isEditModalActive,
  isDeleteModalActive,
  children
}) => {
  return (
    <div className={classnames(
      {
        [styles.isBlurred]: isAddModalActive || isEditModalActive || isDeleteModalActive
      }
    )}
    >
      {children}
    </div>
  )
}
const mapStateToProps = ({ modals }):Partial<ModalAppState> => ({
  isAddModalActive: modals?.isAddModalActive,
  isEditModalActive: modals?.isEditModalActive,
  isDeleteModalActive: modals?.isDeleteModalActive
})

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps)(BlurredFilter)
