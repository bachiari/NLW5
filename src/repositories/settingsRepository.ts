import { Repository, EntityRepository } from "typeorm";
import { Settings } from "../entities/settings";

@EntityRepository(Settings)
export class SettingsRepository extends Repository<Settings> {

}
