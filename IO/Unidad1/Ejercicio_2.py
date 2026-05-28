import pulp

# 1. Definir el problema (Minimización)
model = pulp.LpProblem("Cloud_Optimization", pulp.LpMaximize)

# 2. Definir Variables (Enteras, ya que no puedes rentar media instancia)
x1 = pulp.LpVariable("Instancia_A", lowBound=0,  cat='Integer')
x2 = pulp.LpVariable("Instancia_B", lowBound=0,  cat='Integer')

# 3. Función Objetivo
model += 2 * x1 + 5 * x2, "Costo_Total"

# 4. Restricciones
model +=  x1 + 3 * x2 <= 18, "CPU_Demand"
model +=  x1 +  x2 <= 8, "RAM_Demand"

# 5. Resolver y mostrar
model.solve()

print(f"Estado: {pulp.LpStatus[model.status]}")
print(f"Contratar Tipo A: {x1.varValue}")
print(f"Contratar Tipo B: {x2.varValue}")
print(f"Costo Mínimo Diario: ${pulp.value(model.objective)}")

#source .venv/bin/activate