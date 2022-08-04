import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';

@ValidatorConstraint()
class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface{
  validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export function IsNomeDeUsuarioUnico(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsNomeDeUsuarioUnico',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: IsNomeDeUsuarioUnico,
    });
  }
}