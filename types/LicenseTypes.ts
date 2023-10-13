// Interface for License
export interface ILicense {
  id: number;
  name: string | null;
  active: boolean;
  license: string;
  owner: string;
  collaborator: string | null;
  subscription: {
    id: string;
    status: 'active' | 'inactive';
  };
  created_at: string;
}

// Array for Licenses
export type Licenses = ILicense[];
