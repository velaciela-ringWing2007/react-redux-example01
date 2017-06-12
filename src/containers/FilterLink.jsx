import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link.jsx';


const mapState2Props = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatch2Props = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
    mapState2Props,
    mapDispatch2Props
)(Link)

export default FilterLink