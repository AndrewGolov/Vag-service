import * as yup from 'yup';

const regNumRegex = /^[ABEKMHOPCTYXАВЕКМНОРСТУХ]\d{3}[ABEKMHOPCTYXАВЕКМНОРСТУХ]{2}\d{2,3}$/i;
const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;

export const addingFormSchema = yup.object().shape({
	brand: yup.string().required('Выберите марку'),
	model: yup.string().required('Выберите модель'),
	year: yup
		.string()
		.length(4, 'год указан не корректно')
		.transform((value) => (value === '' ? undefined : value))
		.notRequired(),
	vin: yup
		.string()
		.transform((value) => (value === '' ? undefined : value))
		.notRequired()
		.length(17, 'Неправильный VIN')
		.matches(vinRegex, 'VIN должен содержать 17 символов (без I, O, Q)'),
	regNum: yup
		.string()
		.transform((value) => (value === '' ? undefined : value))
		.notRequired()
		.matches(regNumRegex, 'Некорректный формат номера (например, А123АА12)'),
	bodyColor: yup
		.string()
		.transform((value) => (value === '' ? undefined : value))
		.notRequired()
		.trim()
		.max(30, 'Название цвета не должно превышать 30 символов'),
	additions: yup
		.string()
		.transform((value) => (value === '' ? undefined : value))
		.notRequired()
		.trim()
		.max(300, 'Дополнительное описание не должно превышать 300 символов'),
});
