import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';

import Chart from '../../components/Dashboard/Chart';
import Database from '../../components/Dashboard/Database';
import Thermostats from '../../components/Dashboard/Thermostats';

import { ReactComponent as Data } from '../../assets/img/Data.svg';

export default function DatacenterDashboard() {
	return (
		<>
			<Header />
			<S.Container>
				<Sidenav />
				<S.DatacenterDashboard>
					<div className='head'>
						<Data />
						<h2>Datacenter Dashboard</h2>
					</div>
					<section className='dashboard'>
						<div className='container'>
							<div className='db_container'>
								<Database server={'ASA ESQUERDA'} />
							</div>
							<div className='data'>
								<Thermostats server={'ASA ESQUERDA'} />
							</div>
							<Chart />
						</div>
						<div className='container'>
							<div className='db_container'>
								<Database server={'CASTELINHO'} />
							</div>
							<div className='data'>
								<Thermostats server={'CASTELINHO'} />
							</div>
							<Chart />
						</div>
						<div className='container'>
							<div className='db_container'>
								<Database server={'DATACENTER'} />
							</div>
							<div className='data'>
								<Thermostats server={'DATACENTER'} />
							</div>
							<Chart />
						</div>
						<div className='container'>
							<div className='db_container'>
								<Database server={'AUDITORIO'} />
							</div>
							<div className='data'>
								<Thermostats server={'AUDITORIO'} />
							</div>
							<Chart />
						</div>
						<div className='container'>
							<div className='db_container'>
								<Database server={'ASA DIREITA'} />
							</div>
							<div className='data'>
								<Thermostats server={'ASA DIREITA'} />
							</div>
							<Chart />
						</div>
					</section>
				</S.DatacenterDashboard>
			</S.Container>
		</>
	);
}
