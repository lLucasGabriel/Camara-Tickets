import React from 'react';
import * as S from './styles';

import Chart from '../../components/Dashboard/Chart';
import Database from '../../components/Dashboard/Database';
import Thermostats from '../../components/Dashboard/Thermostats';

export default function DatacenterDashboard() {
	return (
		<S.Container>
			<S.DatacenterDashboard>
				<h2>Datacenter Dashboard</h2>
				<section className='dashboard'>
					<div className='container'>
						<Database server={'ASA ESQUERDA'}/>
						<div className='data'>
							<Chart/>
							<Thermostats/>
						</div>
					</div>
					<div className='container'>
						<Database server={'CASTELINHO'}/>
						<div className='data'>
							<Chart/>
							<Thermostats/>
						</div>
					</div>
					<div className='container'>
						<Database server={'DATACENTER'}/>
						<div className='data'>
							<Chart/>
							<Thermostats/>
						</div>
					</div>
					<div className='container'>
						<Database server={'AUDITORIO'}/>
						<div className='data'>
							<Chart/>
							<Thermostats/>
						</div>
					</div>
					<div className='container'>
						<Database server={'ASA DIREITA'}/>
						<div className='data'>
							<Chart/>
							<Thermostats/>
						</div>
					</div>
				</section>
			</S.DatacenterDashboard>
		</S.Container>
	);
}
