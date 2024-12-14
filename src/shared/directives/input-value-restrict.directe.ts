import { Directive, ElementRef, HostListener, Input } from "@angular/core";

enum InputType {
    ONLY_NUMBERS = 'onlyNumbers',
    ONLY_NUMBERS_WITH_DECIMAL = 'onlyNumbersWithDecimal',
    ONLY_TEXT = 'onlytext',
    ONLY_TEXT_WITH_NUMBERS = 'onlytextwithNumbers',
    ONLY_TEXT_WITH_NUMBERS_SPECIAL_CHARACTERS = 'onlytextwithNumbersSpecialCharacters',
    ONLY_EMAIL = 'onlyEmail',
    ONLY_PHONE_NUMBER = 'onlyPhoneNumber',
    // Add more input types as needed
  }
  
  const inputRestrictions = {
    [InputType.ONLY_NUMBERS]: /^[0-9]*$/,
    [InputType.ONLY_NUMBERS_WITH_DECIMAL]: /^[0-9.]*$/,
    [InputType.ONLY_TEXT]: /^[a-zA-Z]*$/,
    [InputType.ONLY_TEXT_WITH_NUMBERS]: /^[a-zA-Z0-9]*$/,
    [InputType.ONLY_TEXT_WITH_NUMBERS_SPECIAL_CHARACTERS]: /^[a-zA-Z0-9!@#$%^&*()_+=\[\]{}|;:,.<>?\/]*$/,
    [InputType.ONLY_EMAIL]: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    [InputType.ONLY_PHONE_NUMBER]: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    // Add more input restrictions as needed
  };
  
  @Directive({
    selector: '[appInputRestrictor]',
    standalone: true
  })
  export class InputRestrictorDirective {
    @Input('appInputRestrictor') inputType: InputType = InputType.ONLY_NUMBERS;
  
    constructor(private el: ElementRef) { }
  
    @HostListener('input', ['$event']) onInputChange(event: any) {
      const input = event.target.value;
      const restriction = inputRestrictions[this.inputType];
  
      if (restriction) {
        const restrictedInput = input.replace(new RegExp(`[^${restriction.source}]`, 'g'), '');
        this.el.nativeElement.value = restrictedInput;
      } else {
        console.error('Invalid input type');
      }
    }
  }