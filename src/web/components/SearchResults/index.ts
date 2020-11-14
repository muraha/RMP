import { connect } from 'react-redux'

import { IAppState, MoviesData } from '../../../core/interfaces'
import { getMoviesSuccess, filterMovies, sortMovies } from '../../../core/movies/actions'

import { SearchResultsComponent } from './SearchResults'

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapStateToProps = ({ movies }: IAppState) => ({
  totalAmount: movies.totalAmount,
  moviesList: movies.moviesList
})

const mapDispatchToProps = dispatch => ({
  handleGetMoviesSuccess: (payload:MoviesData) => dispatch(getMoviesSuccess(payload)),
  setFilter: (filter) => dispatch(filterMovies(filter)),
  setSorting: (sortParam) => dispatch(sortMovies(sortParam))
})

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsComponent)
