export class TileGroupType {
    public static TYPE_I = 0;
    public static TYPE_Z = 1;
    public static TYPE_S = 2;
    public static TYPE_T = 3;
    public static TYPE_L = 4;
    public static TYPE_J = 5;
    public static TYPE_O = 6;

    private static TYPE_I_ARRAY: number[] = [1, 3, 5, 7];
    private static TYPE_Z_ARRAY: number[] = [2, 4, 5, 7];
    private static TYPE_S_ARRAY: number[] = [3, 5, 4, 6];
    private static TYPE_T_ARRAY: number[] = [3, 5, 4, 7];
    private static TYPE_L_ARRAY: number[] = [2, 3, 5, 7];
    private static TYPE_J_ARRAY: number[] = [3, 5, 7, 6];
    private static TYPE_O_ARRAY: number[] = [2, 3, 4, 5];

    public static getTypeArray(type: number): number[] {
        const dic: Map<number, number[]> = new Map<number, number[]>();
        dic.set(this.TYPE_I, this.TYPE_I_ARRAY);
        dic.set(this.TYPE_Z, this.TYPE_Z_ARRAY);
        dic.set(this.TYPE_S, this.TYPE_S_ARRAY);
        dic.set(this.TYPE_T, this.TYPE_T_ARRAY);
        dic.set(this.TYPE_L, this.TYPE_L_ARRAY);
        dic.set(this.TYPE_J, this.TYPE_J_ARRAY);
        dic.set(this.TYPE_O, this.TYPE_O_ARRAY);

        return dic.get(type);
    }
}
