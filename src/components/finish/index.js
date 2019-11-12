import React, { useEffect } from 'react';
import FlagIcon from '@material-ui/icons/Flag';
import PageHeader from '../layout/pageHeader';
import PropsProvider from '../../propsProvider';

const FinishContent = (props) =>  {
  const { finalValues } = props;

  useEffect(() => console.log(finalValues));

  return (
    <div>
      <PageHeader
        title="Finish"
        description="Please check console"
        icon={<FlagIcon fontSize="large" />}
      />
    </div>
  );
};

const Finish = () => (
  <PropsProvider>
    <FinishContent />
  </PropsProvider>
)


export default Finish;
