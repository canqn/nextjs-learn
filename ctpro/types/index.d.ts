export interface QueryOptions {
  page?: number;
  limit?: number;
  slug: ?string;
}
export interface UserQueryOptions extends QueryOptions {}
export interface HttpError {
  message: string;
  status: number;
}
interface ITipyPost {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export type ApiResponse<T> = {
  success: string;
  data: T;
  message: string;
  pagination: 3;
};

export interface ILoginInvoice {
  token: string;
}
export interface IProfileInvoice {
  id: string;
  name: string;
  username: string;
  password: string;
  password_expire: string;
  type: number;
  cbo:string;
  enable: boolean;
  expired: number;
  groupId: number;
  capCqt: number;
  capUser: number;
  capCqt: number;
  tcqt: string;
}
export interface ICaptcha {
  content: string;
  key: string;
};

export interface IInvoiceProfile {
  id: string;
  username: string;
  name: string;
  password: string;
}

interface RootInvoice {
  datas: DataInvoice[];
}
interface CttKhac {
  ttruong: string;
  kdlieu: string;
  dlieu: string | number | null;
}

interface ThttlPhi {
  tlphi: string | null;
  tphi: string | null;
}

interface ThttlTsuat {
  tsuat: string;
  thtien: number;
  tthue: number;
  gttsuat: string | null;
}

interface TtKhac {
  ttruong: string;
  kdlieu: string;
  dlieu: string;
}

interface TtttKhac {
  ttruong: string;
  kdlieu: string;
  dlieu: number | string;
}

interface DataInvoice {
  nbmst: string;
  khmshdon: number;
  khhdon: string;
  shdon: number;
  cqt: string;
  cttkhac: CttKhac[];
  dvtte: string;
  hdon: string;
  hsgcma: string;
  hsgoc: string;
  hthdon: number;
  htttoan: number;
  id: string;
  idtbao: string | null;
  khdon: string | null;
  khhdgoc: string | null;
  khmshdgoc: string | null;
  lhdgoc: string | null;
  mhdon: string;
  mtdiep: string | null;
  mtdtchieu: string;
  nbdchi: string;
  nbhdktngay: string | null;
  nbhdktso: string | null;
  nbhdso: string | null;
  nblddnbo: string | null;
  nbptvchuyen: string | null;
  nbstkhoan: string;
  nbten: string;
  nbtnhang: string;
  nbtnvchuyen: string | null;
  nbttkhac: any[];
  ncma: Date | null;
  ncnhat: Date | null;
  ngcnhat: Date | null;
  nky: Date | null;
  nmdchi: string;
  nmmst: string;
  nmstkhoan: string | null;
  nmten: string;
  nmtnhang: string | null;
  nmtnmua: string | null;
  nmttkhac: any[];
  ntao: string;
  ntnhan: string;
  pban: string;
  ptgui: number;
  shdgoc: string | null;
  tchat: number;
  tdlap: string;
  tgia: number;
  tgtcthue: number;
  tgtthue: number;
  tgtttbchu: string;
  tgtttbso: number;
  thdon: string;
  thlap: number;
  thttlphi: ThttlPhi[];
  thttltsuat: ThttlTsuat[];
  tlhdon: string;
  ttcktmai: number;
  tthai: number;
  ttkhac: TtKhac[];
  tttbao: number;
  ttttKhac: TtttKhac[];
  ttxly: number;
  tvandnkntt: string;
  mhso: string | null;
  ladhddt: number;
  mkhang: string;
  nbsdthoai: string;
  nbdctdtu: string | null;
  nbfax: string | null;
  nbwebsite: string | null;
  nbcks: string;
  nmsdthoai: string | null;
  nmdctdtu: string | null;
  nmcmnd: string | null;
  nmcks: string | null;
  bhphap: number;
  hddunlap: string | null;
  gchdgoc: string | null;
  tbhgtngay: string | null;
  bhpldo: string | null;
  bhpcbo: string | null;
  bhpngay: string | null;
  tdlhdgoc: string | null;
  tgtphi: string | null;
  unhiem: string | null;
  mstdvnunlhdon: string | null;
  tdvnunlhdon: string | null;
  nbmdvqhnsach: string | null;
  nbsqdinh: string | null;
  nbncqdinh: string | null;
  nbcqcqdinh: string | null;
  nbhtban: string | null;
  nmmdvqhnsach: string | null;
  nmddvchden: string | null;
  nmtgvchdtu: string | null;
  nmtgvchdden: string | null;
  nbtnban: string | null;
  dcdvnunlhdon: string | null;
  dksbke: string | null;
  dknlbke: string | null;
  thtttoan: string;
  msttcgp: string;
  cqtcks: string;
  gchu: string;
  kqcht: string | null;
  hdntgia: string | null;
  tgtkcthue: number;
  tgtkhac: number;
  nmshchieu: string | null;
  nmnchchieu: string | null;
  nmnhhhchieu: string | null;
  nmqtich: string | null;
  ktkhthue: string | null;
  hdhhdvu: string | null;
  qrcode: string | null;
  ttmstten: string | null;
  ladhddtten: string | null;
  hdxkhau: string | null;
  hdxkptquan: string | null;
  hdgktkhthue: string | null;
  hdonLquans: string | null;
  tthdclquan: boolean;
  pdndungs: string | null;
  hdtbssrses: string | null;
  hdTrung: string | null;
  isHDTrung: string | null;
}

export interface IUser {}

export interface IUserProfile {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  country: string;
  passport?: string;
  address?: string;
  phone_code: string;
  title: string;
  id?: string;
}
export interface IAuthenticatedInvoice {
  token: string;
}

export interface IUserLoginInvoiceOptions {
  username: string;
  password: string;
  cvalue: string;
  ckey: string;
}

export interface UserLoginOptions {
  email: string;
  password: string;
}

export interface UserRegisterOptions {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
}

export interface IAuthenticatedUser {
  user_id: number;
  picture: string;
  full_name: string;
  email: string;
  token: string;
  refresh_token: string;
  alias: string;
}

export interface UserChangePasswordOptions {
  email: string;
  code_reset_password: string;
  password: string;
  confirm_password: string;
}

export interface UserRefreshTokenOptions {
  token: string;
}