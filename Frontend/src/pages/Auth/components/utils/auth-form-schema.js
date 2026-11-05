import * as yup from 'yup';

export const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Введите Login')
		.matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
		.min(3, 'Логин должен быть не менее 3 символов')
		.max(20, 'Логин должен быть не более 20 символов'),
	password: yup
		.string()
		.required('Введите пароль')
		.matches(/^[\w#%]+$/, 'Неверный пароль. Допускаются только буквы, цифры и символы #, %')
		.min(6, 'Пароль не должен быть меньше 6 символов'),
});
