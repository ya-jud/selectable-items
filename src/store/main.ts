import { defineStore } from 'pinia';

export interface Item {
	id: number;
	name: string;
}

type BlockName = 'leftBlock' | 'rightBlock';

export const useMainStore = defineStore('main', {
	state: () => ({
		leftBlock: [
			{ id: 1, name: 'Shoes 1' },
			{ id: 2, name: 'Shoes 2' },
			{ id: 3, name: 'Shoes 3' },
			{ id: 4, name: 'Shoes 4' },
			{ id: 5, name: 'T-shirt 1' },
			{ id: 6, name: 'T-shirt 2' },
			{ id: 7, name: 'T-shirt 3' },
			{ id: 8, name: 'T-shirt 4' }
		] as Item[],
		leftSelectedItems: [] as Item[],
		rightBlock: [
			{ id: 11, name: 'Jacket 1' },
			{ id: 12, name: 'Jacket 2' },
			{ id: 13, name: 'Jacket 3' },
			{ id: 14, name: 'Jacket 4' },
			{ id: 15, name: 'Hoodie 1' },
			{ id: 16, name: 'Hoodie 2' },
			{ id: 17, name: 'Hoodie 3' },
			{ id: 18, name: 'Hoodie 4' }
		] as Item[],
		rightSelectedItem: [] as Item[]
	}),

	actions: {
		selectElement(
			blockName: BlockName,
			payload: number,
			isReturnBack: boolean = false
		) {
			const selectedKey = blockName === 'leftBlock' ? 'leftSelectedItems' : 'rightSelectedItem';
			const blockKey = blockName;

			if (blockName === 'rightBlock') {
				if (!isReturnBack) {
					if (this.rightSelectedItem.length >= 1) {
						alert('Максимальное количество элементов (1) уже выбрано!');
						return;
					}
				}
			}

			if (blockName === 'leftBlock' && !isReturnBack) {
				if (this.leftSelectedItems.length >= 6) {
					alert('Максимальное количество элементов (6) уже выбрано!');
					return;
				}
			}

			const sourceKey = isReturnBack ? selectedKey : blockKey;
			const targetKey = isReturnBack ? blockKey : selectedKey;
			const source = this[sourceKey] as Item[];
			const target = this[targetKey] as Item[];

			const index = source.findIndex(item => item.id === payload);
			if (index === -1) return;

			const [movedItem] = source.splice(index, 1);
			if (targetKey === 'rightSelectedItem') {
				target.length = 0;
			}
			target.push(movedItem);
		}
	}
});