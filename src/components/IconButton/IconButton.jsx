import { memo, useMemo, useCallback } from 'react'
import './IconButton.css'

export const IconButton = memo(
	({ direction = 'left', disable = false, onClick }) => {
		const handleClick = useCallback(() => {
			if (!disable && onClick) {
				onClick()
			}
		}, [disable, onClick])

		const handleKeyDown = useCallback(
			e => {
				if (!disable && (e.key === 'Enter' || e.key === ' ')) {
					onClick?.()
				}
			},
			[disable, onClick]
		)

		const cls = useMemo(() => {
			return [
				'icon-button',
				direction === 'left' && 'left',
				direction === 'right' && 'right',
				disable && 'disable',
			]
				.filter(Boolean)
				.join(' ')
		}, [direction, disable])

		return (
			<div
				className={cls}
				onClick={handleClick}
				role='button'
				aria-disabled={disable}
				tabIndex={disable ? -1 : 0}
				onKeyDown={handleKeyDown}
			/>
		)
	}
)
