import { ExpirationCompleteEvent, Publisher, Subjects } from '@rhorg/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  // possible to set as readonly without setting the type
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
