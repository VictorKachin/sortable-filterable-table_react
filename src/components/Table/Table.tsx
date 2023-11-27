import { useState } from 'react'
import { Data } from '../../types'
import { capitalize } from '../../utils'
import './table.css'

export type TableProps = {
	rows: Data
}

export const Table = ({ rows }) => {
	const [sortedRows, setRows] = useState(rows)

	const formatEntry = (entry: string | number | boolean) => {
		if (typeof entry === 'boolean') {
			return entry ? '✅' : '❌'
		}

		return entry
	}

	return (
		<table>
			<thead>
				<tr>
					{Object.keys(rows[0]).map((entry, index) => (
						<th key={index}>{capitalize(entry)}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{sortedRows.map((row, index) => (
					<tr key={index}>
						{Object.values(row).map((entry, columnIndex) => (
							<td key={columnIndex}>{formatEntry(entry)}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
