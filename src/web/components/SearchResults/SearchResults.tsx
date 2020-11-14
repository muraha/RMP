import React from 'react'

import { FilterSortComponent } from './filterAndSort/FilterSort'
import MoviesContainer from './Movies'

import styles from './SearchResults.css'

import { StateProps, DispatchProps } from './index'

export const SearchResultsComponent: React.FC<StateProps & DispatchProps> = ({
  totalAmount,
  moviesList,
  setFilter,
  setSorting
}) => {
  return (
    <>
      <div className={styles.divider}></div>
      <div className={styles.SearchResultContainer}>
        <FilterSortComponent
          handleFilterSelection={setFilter}
          handleSortingChange={setSorting}
        />
        <MoviesContainer
          totalAmount={totalAmount}
          moviesList={moviesList}
        />
      </div>
    </>
  )
}
