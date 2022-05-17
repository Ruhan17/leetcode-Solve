#include<bits/stdc++.h>
using namespace std;

bool check(int *array, int n){
    for(int i = 0; i < n; i++){
        if(array[i] != i) return false;
    }
    return true;
}

int reinitializePermutation(int n){
    int *perm = new int[n];
    int *arr = new int[n];
    int operations = 0;

    for(int i = 0; i < n; i++){
        perm[i] = i;
        arr[i] = i;
    }

    for(int i = 0; i < n; i++){
        operations++;
        for(int j = 0; j < n; j++){
            if(j%2 == 0){
                arr[j] = perm[j/2];
            }
            else{
                arr[j] = perm[n / 2 + (j - 1) / 2];
            }
        }
        for(int j = 0; j < n; j++){
            perm[j] = arr[j];
        }
        if(check(perm, n)) return operations;
    }
    return -1;
}

int main(){
    cout<<reinitializePermutation(6)<<endl;
    return 0;
}