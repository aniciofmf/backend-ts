import { EventSubscriber, On } from "event-dispatch";
import userEvents from "@/events/types/user";

@EventSubscriber()
export default class UserSubscriber {
  @On(userEvents.login)
  public onUserSignIn({}) {}

  @On(userEvents.signup)
  public onUserSignUp({}) {
    try {
    } catch (e) {}
  }
}
