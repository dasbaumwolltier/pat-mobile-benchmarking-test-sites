import numpy as np

A = np.mat([[3, -2], [2, -2]])
C = np.mat([[1, 2], [2, 1]])

cInv = np.linalg.inv(C)

print(np.matmul(cInv, np.matmul(A, C)))