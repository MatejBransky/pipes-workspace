import { Datagrid } from '@pkg/datagrid-chakra-ui';
import { datagrid } from '@pkg/datagrid-core';

console.info(datagrid());

function App() {
	return (
		<div className="App">
			<Datagrid />
		</div>
	);
}

export default App;
