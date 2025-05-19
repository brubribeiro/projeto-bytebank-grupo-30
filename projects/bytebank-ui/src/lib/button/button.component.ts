import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text = 'clique aqui';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() isDisabled = false;
  @Input() loading = false;
  @Input() icon: string | null = null;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() iconSize: 'small' | 'medium' | 'large' = 'medium';
  @Input() iconColor: 'primary' | 'secondary' = 'primary';
  @Input() iconLoading: string | null = null;
  @Output() public event = new EventEmitter<void>();
}
