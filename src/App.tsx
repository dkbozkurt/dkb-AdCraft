// App.tsx
import React, { useState } from 'react'
import Background from './components/Background'
import FileDropArea from './components/FileDropArea'
import NamingArea from './components/NamingArea'
import NetworkSelectionArea from './components/NetworkSelectionArea'
import ConfirmButton from './components/ConfirmButton'

function App() {
	const [creativeName, setCreativeName] = useState('')
	const [productName, setProductName] = useState('')
	const [creativeType, setCreativeType] = useState('Playable')
	const [geo, setGeo] = useState('ALL')
	const [selectedNetworks, setSelectedNetworks] = useState<string[]>([])

	return (
		<Background>

			<FileDropArea />
			<NamingArea
				creativeName={creativeName}
				setCreativeName={setCreativeName}
				productName={productName}
				setProductName={setProductName}
				creativeType={creativeType}
				setCreativeType={setCreativeType}
				geo={geo}
				setGeo={setGeo}
			/>
			<NetworkSelectionArea
				selectedNetworks={selectedNetworks}
				setSelectedNetworks={setSelectedNetworks}
			/>
			<ConfirmButton
				creativeName={creativeName}
				productName={productName}
				creativeType={creativeType}
				geo={geo}
				selectedNetworks={selectedNetworks}
			/>
		</Background>
	)
}

export default App