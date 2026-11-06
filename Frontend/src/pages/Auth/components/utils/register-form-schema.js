import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Введите логин')
		.matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
		.min(3, 'Логин должен быть не менее 3 символов')
		.max(20, 'Логин должен быть не более 20 символов')
		.trim('Логин не должен содержать пробелы'),

	password: yup
		.string()
		.required('Введите пароль')
		.matches(/^[\w#%]+$/, 'Неверный пароль. Допускаются только буквы, цифры и символы #, %')
		.min(6, 'Пароль не должен быть меньше 6 символов'),
	passcheck: yup
		.string()
		.required('Поле совпадения паролей не должно быть пустым')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});
