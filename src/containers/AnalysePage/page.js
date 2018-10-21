// @flow

import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import News from './news';
import Graphs from './graphs';

const AnalyseContainer = styled.div`
  .tr {
    line-height: 2rem;

    .th, .td {
      padding: 0 0.5rem;
      font-size: smaller;
    }
  }
`;

type Props = {
  dateGraph: Array<any>,
  categoryGraph: Array<any>,
  outcomeGraph: Array<any>,
  crimeTable: Array<any>,
  news: Array<any>,
};

class AnalysePage extends React.PureComponent<Props> {
  render(){
    const {
      dateGraph,
      categoryGraph,
      outcomeGraph,
      news,
    } = this.props;

    return (<AnalyseContainer>
      { dateGraph &&
        <section>
          <h3>Graphs</h3>
          <Graphs
            date={dateGraph}
            category={categoryGraph}
            outcome={outcomeGraph}
          />
        </section>
      }
      { news &&
        <section>
          <h3>News</h3>
          <News
            news={news}
          />
        </section>
      }
    </AnalyseContainer>);
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.analyse,
  }
}

export default connect(mapStateToProps)(AnalysePage);