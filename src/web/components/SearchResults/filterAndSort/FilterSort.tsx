import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { isNil, omitBy } from 'lodash/fp'

import Button from '../../utils/button/Button'
import Text from '../../utils/text/Text'
import { Sort, filterState } from '../../../../core/constants'
import { useToggleSort } from '../../../../core/utils/helper'

import styles from './FilterSort.css'

type OwnProps = {
  handleFilterSelection: (filter) => void
  handleSortingChange: (sortBy) => void
}

export const FilterSortComponent: React.FC<OwnProps> = ({
  handleFilterSelection,
  handleSortingChange
}) => {
  const [filters, setFilters] = useState(filterState)
  const [byRating, sortByRating] = useToggleSort(true)
  const [byDate, sortByDate] = useToggleSort(false)

  useEffect(() => {
    setFilters([...filters])
  }, [])

  const handleFilterClick = ({ currentTarget: { dataset } }): void => {
    const newState = filters.map(({ name, selected }):any => {
      if (selected) selected = undefined
      if (name === dataset.key) {
        selected = 'btnSelected'
        handleFilterSelection(name)
      }
      return omitBy(isNil, {
        name,
        selected
      })
    })

    setFilters(newState)
  }

  const handleSortChange = () => {
    sortByRating(); sortByDate()
    if (byRating) handleSortingChange(Sort.rat)
    if (byDate) handleSortingChange(Sort.rel)
  }

  const renderEachFilter = ({ name, selected }) => (
    <div
      key={name}
      data-key={name}
      onClick={handleFilterClick}
    >
      <Button
        transparent
        filter
        classes={classnames(styles[selected])}
      >
        <Text>{name}</Text>
      </Button>
    </div>
  )

  return (
    <div className={styles.filterSortWrapper}>
      <div className={styles.filterContainer}>
        {filters.map(renderEachFilter)}
      </div>
      <div className={styles.sortingContainer}>
        <div className={styles.sortSelectWrapper}>
          <label htmlFor='sorting'>
            <Text gray>
              sort by
            </Text>
          </label>
          <select name='sorting' className={styles.sortSelector} onChange={handleSortChange}>
            <option value='release'>
              RELEASE DATE
            </option>
            <option value='rating'>
              RATING
            </option>
          </select>
        </div>
      </div>
    </div>
  )
}
