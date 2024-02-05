import { RepositoryInject } from '@/libs/utils/decoretors';
import { IProjectQueryRepositoryAdapter } from '../interfaces/project.repository.interface';



@RepositoryInject( ProjectQueryRepository )
export class ProjectQueryRepository
  implements IProjectQueryRepositoryAdapter {
  constructor() {
  }
}
