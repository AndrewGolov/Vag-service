/* eslint-disable react-refresh/only-export-components */
import { useForm, useWatch, Controller } from 'react-hook-form';
import { getBrands, getModelsByBrand } from 'auto-parts-db';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { mapSelectOptions, getYearOptions, addingFormSchema } from './utils';
import { request } from '../../../../utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { addCar } from '../../../../actions';
import Select from 'react-select';
import styled from 'styled-components';

const AddingCarFormContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		handleSubmit,
		control,
		register,
		setValue,
		reset,
		formState: { errors, isValid, isDirty },
	} = useForm({
		defaultValues: {
			brand: '',
			model: '',
			year: '',
			vin: '',
			regNum: '',
			bodyColor: '',
			additions: '',
		},
		resolver: yupResolver(addingFormSchema),
		mode: 'onChange',
	});

	const selectedBrand = useWatch({ control, name: 'brand' });

	const optionsBrand = mapSelectOptions(getBrands());
	const optionsModel = mapSelectOptions(getModelsByBrand(selectedBrand));
	const optionsYear = getYearOptions();

	const onSubmitForm = ({ brand, model, year, vin, regNum, bodyColor, additions }) => {
		setServerError(null);
		if (!isValid) return;
		request('/api/my-garage/add', 'POST', { brand, model, year, vin, regNum, bodyColor, additions })
			.then((carData) => {
				if (carData.error) {
					throw new Error(carData.error);
				}
				dispatch(addCar(carData));
				navigate('/account/my-garage');
				reset();
			})
			.catch((error) => {
				setServerError(error.message);
			});
	};
	const isDisabled =
		!isDirty ||
		!isValid; /*TODO отключение кнопки когда форма не валидна и отключение конпки при выполнении запроса*/
	console.log('----------------isDisabled ----------------', isDisabled);

	return (
		<form className={className} onSubmit={handleSubmit(onSubmitForm)}>
			<div className="glass-frame">
				<div className="form-content">
					<div className="form-heading">
						<h2>Добавление автомобиля</h2>
						<p>Заполните информацию о вашем автомобиле</p>
					</div>

					<div className="form-fields">
						<label>
							Марка автомобиля
							<Controller
								name="brand"
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										classNamePrefix="react-select"
										className={errors.brand ? 'has-error' : ''}
										options={optionsBrand}
										value={optionsBrand.find((item) => item.value === field.value) || null}
										onChange={(option) => {
											field.onChange(option?.value || '');
											setValue('model', '');
										}}
										placeholder="Выберите марку"
									/>
								)}
							/>
							<p className="field-error">{errors.brand?.message || ' '}</p>
						</label>

						<label>
							Модель автомобиля
							<Controller
								name="model"
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										classNamePrefix="react-select"
										className={errors.model ? 'has-error' : ''}
										options={optionsModel}
										value={optionsModel.find((item) => item.value === field.value) || null}
										onChange={(option) => field.onChange(option?.value || '')}
										placeholder="Выберите модель"
										isDisabled={!selectedBrand}
									/>
								)}
							/>
							<p className="field-error">{errors.model?.message || ' '}</p>
						</label>

						<label>
							Год выпуска
							<Controller
								name="year"
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										classNamePrefix="react-select"
										className={errors.year ? 'has-error' : ''}
										options={optionsYear}
										value={optionsYear.find((item) => item.value === field.value) || null}
										onChange={(option) => field.onChange(option?.value || '')}
										placeholder="Год выпуска"
									/>
								)}
							/>
							<p className="field-error">{errors.year?.message || ' '}</p>
						</label>

						<label htmlFor="vin">
							VIN
							<input
								type="text"
								id="vin"
								placeholder="Введите VIN автомобиля"
								aria-invalid={!!errors.vin}
								{...register('vin')}
							/>
							<p className="field-error">{errors.vin?.message || ' '}</p>
						</label>

						<label htmlFor="regNum">
							Государственный номер
							<input
								type="text"
								id="regNum"
								placeholder="Введите регистрационный номер"
								aria-invalid={!!errors.regNum}
								{...register('regNum')}
							/>
							<p className="field-error">{errors.regNum?.message || ' '}</p>
						</label>

						<label htmlFor="bodyColor">
							Цвет кузова
							<input
								type="text"
								id="bodyColor"
								placeholder="Цвет"
								aria-invalid={!!errors.bodyColor}
								{...register('bodyColor')}
							/>
							<p className="field-error">{errors.bodyColor?.message || ' '}</p>
						</label>

						<label className="full-width" htmlFor="additions">
							Дополнительная информация
							<textarea
								id="additions"
								placeholder="Дополнительные сведения об автомобиле"
								aria-invalid={!!errors.additions}
								{...register('additions')}
							/>
							<p className="field-error">{errors.additions?.message || ' '}</p>
						</label>
					</div>

					<p className="server-error-message">{serverError || ' '}</p>

					<button type="submit">Добавить в гараж</button>
				</div>
			</div>
		</form>
	);
};

export const AddingCarForm = styled(AddingCarFormContainer)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	padding: 25px;
	overflow: hidden;

	border-radius: 20px;
	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;

		background: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.3) 100%);
	}

	.glass-frame {
		position: relative;
		z-index: 1;

		width: 96%;
		padding: 55px 50px;

		border: 1px solid rgba(255, 255, 255, 0.23);
		border-radius: 24px;

		background: rgba(25, 26, 32, 0.48);

		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);

		box-shadow:
			inset 0 1px 2px rgba(255, 255, 255, 0.22),
			inset 0 -1px 2px rgba(255, 255, 255, 0.08),
			0 15px 40px rgba(0, 0, 0, 0.2);

		&::before {
			content: '';
			position: absolute;
			inset: 25px;

			border: 2px dashed rgba(210, 211, 217, 0.3);
			border-radius: 20px;

			pointer-events: none;
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 10%;

			width: 80%;
			height: 1px;

			background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
		}
	}

	.form-content {
		position: relative;
		z-index: 2;

		display: flex;
		flex-direction: column;
		gap: 30px;

		max-width: 850px;
		margin: 0 auto;
	}

	.form-heading {
		text-align: center;

		h2 {
			margin: 0 0 12px;

			color: #e8e8eb;
			font-size: 21px;
			font-weight: 800;
			letter-spacing: 5px;
			text-transform: uppercase;
			text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
		}

		p {
			margin: 0;

			color: #b5b6bd;
			font-size: 14px;
			line-height: 1.65;
			letter-spacing: 0.3px;
			text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
		}
	}

	.form-fields {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px 25px;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 10px;

		color: #d5d6da;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	input,
	textarea {
		box-sizing: border-box;
		width: 100%;
		padding: 0 15px;

		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 6px;
		outline: none;

		background: rgba(15, 16, 20, 0.65);
		color: #e8e8eb;

		font-family: inherit;
		font-size: 14px;
		line-height: normal;

		transition:
			border-color 0.25s ease,
			box-shadow 0.25s ease,
			background 0.25s ease;

		&::placeholder {
			color: #85868e;
		}

		&:hover {
			border-color: rgba(253, 184, 19, 0.5);
		}

		&:focus {
			border-color: #fdb813;
			background: rgba(15, 16, 20, 0.85);
			box-shadow: 0 0 15px rgba(253, 184, 19, 0.12);
		}

		&[aria-invalid='true'] {
			border-color: #ed1c24;
			box-shadow: 0 0 10px rgba(237, 28, 36, 0.12);
		}
	}

	input {
		height: 48px;
	}

	textarea {
		min-height: 100px;
		padding: 13px 15px;
		resize: vertical;
	}

	/* React Select */

	.react-select__control {
		box-sizing: border-box;
		height: 48px;
		min-height: 48px;

		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 6px;

		background: rgba(15, 16, 20, 0.65);
		box-shadow: none;

		cursor: pointer;

		transition:
			border-color 0.25s ease,
			box-shadow 0.25s ease;

		&:hover {
			border-color: rgba(253, 184, 19, 0.5);
		}

		&--is-focused {
			border-color: #fdb813;
			box-shadow: 0 0 15px rgba(253, 184, 19, 0.12);
		}
	}

	.react-select__value-container {
		padding: 0 15px;
	}

	.react-select__single-value {
		color: #e8e8eb;
		font-size: 14px;
	}

	.react-select__placeholder {
		color: #85868e;
		font-size: 14px;
	}

	.react-select__input-container {
		color: #e8e8eb;

		input {
			width: auto;
			height: auto;
			padding: 0;

			border: 0;
			border-radius: 0;

			background: transparent;
			box-shadow: none;

			color: inherit;
			font: inherit;
		}
	}

	.react-select__indicators {
		color: #b5b6bd;
	}

	.react-select__indicator {
		&:hover {
			color: #fdb813;
		}
	}

	.react-select__indicator-separator {
		background: rgba(255, 255, 255, 0.15);
	}

	.react-select__menu {
		z-index: 10;
		overflow: hidden;

		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 6px;

		background: #191a20;
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
	}

	.react-select__menu-list {
		padding: 5px;
	}

	.react-select__option {
		padding: 11px 12px;
		border-radius: 4px;

		background: transparent;
		color: #d5d6da;

		font-size: 13px;
		cursor: pointer;

		&--is-focused {
			background: rgba(253, 184, 19, 0.12);
			color: #fdb813;
		}

		&--is-selected {
			background: rgba(253, 184, 19, 0.2);
			color: #fdb813;
		}
	}

	.react-select__control--is-disabled {
		background: rgba(15, 16, 20, 0.35);
		cursor: not-allowed;

		.react-select__single-value {
			color: #85868e;
		}
	}

	.has-error .react-select__control {
		border-color: #ed1c24;
		box-shadow: 0 0 10px rgba(237, 28, 36, 0.12);
	}

	/* Ошибки валидации */

	.field-error {
		display: block;
		min-height: 17px;
		margin: 0;

		color: #ff5555;
		font-size: 12px;
		font-weight: 500;
		line-height: 17px;
		letter-spacing: 0;
		text-transform: none;
	}

	.server-error-message {
		min-height: 18px;
		margin: 0;

		color: #ff5555;
		font-size: 13px;
		line-height: 18px;
		text-align: center;
	}

	.full-width {
		grid-column: 1 / -1;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		min-height: 52px;
		margin-top: 5px;
		padding: 12px 22px;

		border: 2px solid #fdb813;
		border-radius: 7px;

		background: rgba(15, 16, 20, 0.65);
		color: #fdb813;

		font-size: 15px;
		font-weight: 700;
		letter-spacing: 0.4px;

		cursor: pointer;

		transition:
			color 0.25s ease,
			border-color 0.25s ease,
			background 0.25s ease,
			box-shadow 0.25s ease;

		&:hover {
			color: #ed1c24;
			border-color: #ed1c24;
			background: rgba(237, 28, 36, 0.09);
			box-shadow: 0 0 20px rgba(237, 28, 36, 0.17);
		}
	}

	@media (max-width: 768px) {
		padding: 15px;

		.glass-frame {
			width: 100%;
			padding: 45px 30px;
		}

		.form-fields {
			grid-template-columns: 1fr;
			gap: 18px;
		}

		.full-width {
			grid-column: auto;
		}

		.form-heading h2 {
			font-size: 17px;
			letter-spacing: 3px;
		}
	}

	@media (max-width: 480px) {
		padding: 8px;

		.glass-frame {
			padding: 35px 20px;
		}

		.glass-frame::before {
			inset: 12px;
		}

		.form-heading h2 {
			font-size: 15px;
			letter-spacing: 2px;
		}

		.form-heading p {
			font-size: 12px;
		}
	}
`;
