import { connect } from 'react-redux'

import { IAppState, Movie } from '../../../core/interfaces'
import { closeDescription, getMovieDesc } from '../../../core/movies/actions'

import MovieDetailsComponent from './MovieDetails'

export type StateProps = {
  movieDescription: Movie
}
export type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapStateToProps = ({ movies }: IAppState) => ({
  movieDescription: movies.descriptionForMovie
})

const mapDispatchToProps = dispatch => ({
  getMovieDescription: (payload) => dispatch(getMovieDesc(payload)),
  handleCloseDetails: () => dispatch(closeDescription())
})

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsComponent)
