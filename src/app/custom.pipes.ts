import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'FilterByFirstLetter',
    pure: false //this custom pipe is impure
})
export class CustomPipes implements PipeTransform{
    transform(personas: any[]) {
        personas.filter(persona => persona.name.startsWith('A'))
    }
}