import { Select as RadixSelect } from 'radix-ui';

/**
 * Select de opciones fijas (no creatable, no de búsqueda).
 * `options`  — array de { id, label }
 * `value`    — id seleccionado
 * `onChange` — (id) => void
 */
export function Select({ options, value, onChange, placeholder = 'Selecciona' }) {
  return (
    <RadixSelect.Root value={String(value)} onValueChange={(v) => onChange(v)}>
      <RadixSelect.Trigger className="ui-select__trigger">
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>▾</RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="ui-select__content" position="popper" sideOffset={4}>
          <RadixSelect.Viewport className="ui-select__viewport">
            {options.map((opt) => (
              <RadixSelect.Item key={opt.id} value={String(opt.id)} className="ui-select__item">
                <RadixSelect.ItemText>{opt.label}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
