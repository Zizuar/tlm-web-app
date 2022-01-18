export class CreateEventDto {
  readonly date: Date;
  readonly name: string;
  readonly venue: string;
  readonly town: string;
  readonly venueLink?: string;
  readonly fbEventLink?: string;
}
